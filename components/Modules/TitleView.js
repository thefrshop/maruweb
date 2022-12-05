import React from 'react';

import styled from '../../styles/module/TitleView/titleview_dynamic.module.css';
import styles from '../../styles/module/TitleView/titleview_static.module.css';

const TitleView = ({ onDevice = 'PC', Center, Left, Right, Bottom, Title, SubTitle, children, TitleColor, SubColor, backgroundColor, PageStation, CenterAlign, background, NotPadding }) => {
    return (
        <div
            id={styled['Contain_' + onDevice]}
            style={{
                background: PageStation ? 'url(' + background + ')' : backgroundColor ? backgroundColor : '#fff',
                backgroundRepeat: PageStation ? 'no-repeat' : null,
                backgroundSize: PageStation ? 'cover' : null,
                height: PageStation ? '100vh' : null,
            }}
        >
            <div
                className={PageStation ? styles.ScroleCover : styles.cover}
                style={
                    NotPadding
                        ? {
                              paddingTop: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                          }
                        : {}
                }
            >
                <div
                    className={styles.Header}
                    style={
                        NotPadding
                            ? {
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingRight: 0,
                              }
                            : {}
                    }
                >
                    {CenterAlign !== 'left' && <div className={styles.Left}>{Left ? Left : null}</div>}
                    {Center ? (
                        <div
                            className={styles.Center}
                            style={{
                                justifyContent: CenterAlign === 'left' ? 'flex-start' : CenterAlign === 'right' ? 'flex-end' : 'center',
                            }}
                        >
                            {Center ? Center : null}
                        </div>
                    ) : (
                        <div
                            className={styles.TitleContain}
                            style={{
                                alignItems: CenterAlign === 'left' ? 'flex-start' : CenterAlign === 'right' ? 'flex-end' : 'center',
                            }}
                        >
                            <div
                                className={styled.Title}
                                style={{
                                    color: PageStation ? '#fff' : TitleColor ? TitleColor : '#333',
                                }}
                            >
                                {Title ? Title : ''}
                            </div>
                            <div
                                className={styled.SubTitle}
                                style={{
                                    color: PageStation ? '#fff' : SubColor ? SubColor : '#333',
                                }}
                            >
                                {SubTitle ? SubTitle.split('\n').map((line, index) => <div key={index}>{line}</div>) : ''}
                            </div>
                        </div>
                    )}
                    {CenterAlign !== 'right' && <div className={styles.Right}>{Right ? Right : null}</div>}
                </div>

                <div>{children}</div>
                <div className={styles.Bottom}>{Bottom && Bottom}</div>
            </div>
        </div>
    );
};

export default TitleView;
