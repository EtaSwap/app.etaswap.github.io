import React, {createContext, useContext, useEffect, useState} from 'react';
import {toast} from "react-toastify";
import './Toaster.css';
import 'react-toastify/dist/ReactToastify.css';
import {CopyOutlined} from "@ant-design/icons";

const ToasterContext = createContext();

export const ToasterProvider = ({children}) => {

    const toastOptions = {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 6000,
        closeButton: false,
    };
    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Some error with clipboard', err);
        }
    };
    const showToast = (title, message, type) => {
        switch (type) {
            case 'success':
                toast.success(<div className={'custom-toast toast-success'}>
                        <div className="toast-header">
                            <strong className="mr-auto">{title}</strong>
                        </div>
                        <div className="toast-body">{message}</div>
                    <div className={'custom-toast--clipboard'}>
                        <CopyOutlined />
                    </div>
                </div>, {
                    ...toastOptions,
                    onClose: () => {
                        copyToClipboard(`${title}.${message}`);
                    },
                });
                break;
            case 'error':
                toast.error(<div className={'custom-toast toast-error'}>
                        <div className="toast-header">
                            <strong className="mr-auto">{title}</strong>
                        </div>
                        <div className="toast-body">{message}</div>
                    <div className={'custom-toast--clipboard'}>
                        <CopyOutlined />
                    </div>
                    </div>, {
                    ...toastOptions,
                    onClose: () => {
                        copyToClipboard(`${title}.${message}`);
                    },
                });
                break;
            case 'info':
                toast.info(<div className={'custom-toast toast-info'}>
                        <div className="toast-header">
                            <strong className="mr-auto">{title}</strong>
                        </div>
                        <div className="toast-body">{message}</div>
                    <div className={'custom-toast--clipboard'}>
                        <CopyOutlined />
                    </div>
                    </div>, {
                    ...toastOptions,
                    onClose: () => {
                        copyToClipboard(`${title}.${message}`);
                    },
                });
                break;
            case 'warning':
                toast.warning(<div className={'custom-toast toast-warning'}>
                        <div className="toast-header">
                            <strong className="mr-auto">{title}</strong>
                        </div>
                        <div className="toast-body">{message}</div>
                    <div className={'custom-toast--clipboard'}>
                    <CopyOutlined />
                </div>
                    </div>, {
                    ...toastOptions,
                    onClose: () => {
                        copyToClipboard(`${title}.${message}`);
                    },
                });
                break;
            default:
                return '';
        }
    };

    return (
        <ToasterContext.Provider value={{showToast}}>
            {children}
        </ToasterContext.Provider>
    );
};

export const useToaster = () => {
    return useContext(ToasterContext);
};