import React, {useEffect, useState} from "react";
import {Button, Card, Col, Collapse, Divider, Empty, List, Popconfirm, Row, Space, Tabs, Tag} from "antd";
import {EditorProps, HTTPPacketEditor, YakCodeEditor, YakEditor} from "../../utils/editors";
import {genDefaultPagination, YakScript, YakScriptHookItem, YakScriptHooks} from "../invoker/schema";
import {YakExecutorParam} from "../invoker/YakExecutorParams";
import {showModal} from "../../utils/showModal";
import {YakModuleList} from "../yakitStore/YakitStorePage";
import {HTTPFlowMiniTable} from "../../components/HTTPFlowMiniTable";
import {YakitLogViewers} from "../invoker/YakitLogFormatter";
import {ExecResultLog} from "../invoker/batch/ExecMessageViewer";
import ReactJson from "react-json-view";
import {SelectOne} from "../../utils/inputUtil";
import {YakScriptParamsSetter} from "../invoker/YakScriptParamsSetter";
import "../main.css";
import {MITMPluginOperatorProps} from "./MITMPluginOperator";
import {MITMPluginListProp} from "./MITMPluginList";


export interface MITMPluginCardProp extends MITMPluginListProp {

}

const {ipcRenderer} = window.require("electron");

export const MITMPluginCard: React.FC<MITMPluginCardProp> = (props) => {
    const [tab, setTab] = useState("history");

    // history
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let id = setInterval(() => {
            ipcRenderer.invoke("mitm-get-current-hook")
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    return <div style={{height: "100%"}}>
        <div style={{height: "100%", overflow: "hidden"}}>
            <HTTPFlowMiniTable
                simple={true}
                onTotal={setTotal}
                filter={{
                    SearchURL: "", SourceType: "mitm",
                    Pagination: {...genDefaultPagination(), Page: 1, Limit: 20}
                }}
                source={""}
                autoUpdate={true}
            />
        </div>
        {/* </Tabs.TabPane>
        </Tabs> */}
    </div>
};

export interface YakScriptHooksViewerProp {
    hooks: YakScriptHooks
}

export const YakScriptHooksViewer: React.FC<YakScriptHooksViewerProp> = (props) => {
    return <List<YakScriptHookItem>
        pagination={false} size={"small"} split={true}
        dataSource={props.hooks!.Hooks} bordered={false}
        renderItem={i => {
            return <List.Item style={{width: "100%", padding: 0}} extra={<>

            </>}>
                <Card
                    size={"small"} bordered={false} hoverable={true}
                    style={{width: "100%"}}
                >
                    <Row>
                        <Col span={16}>
                            <Space style={{width: "100%", textAlign: "left"}}>
                                {i.YakScriptName ? `${i.YakScriptName}[${i.YakScriptId}]` : i.Verbose}

                            </Space>
                        </Col>
                        <Col span={8}>
                            <div style={{width: "100%", textAlign: "right"}}>
                                <Popconfirm
                                    title={"确定要移除该 Hook 吗？"}
                                    onConfirm={() => {
                                        ipcRenderer.invoke("mitm-remove-hook", {
                                            HookName: [props.hooks.HookName],
                                            RemoveHookID: [i.YakScriptName],
                                        } as any)
                                    }}
                                >
                                    <Button
                                        danger={true} size={"small"}
                                        type={"link"}
                                    >移除Hook</Button>
                                </Popconfirm>
                            </div>
                        </Col>

                    </Row>
                </Card>
            </List.Item>
        }}
    >

    </List>
};