import "./FirstBackground.css";
import React, { useState } from "react";
import { Circle } from "./Circle";
import { Line } from "./Line";

export const FirstBackground = (props) => {
  let array = [];
  const info = [
    80, //size
    [
      //lines + childInfo
      [
        [300, 60], //line1
        [
          //child1 from middle
          100,
          [
            [
              [200, 0],
              [
                50,
                [
                  [
                    [300, 60],
                    [50, []],
                  ],
                ],
              ],
            ],
            [
              [100, 60],
              [
                50,
                [
                  [
                    [150, 60],
                    [
                      60,
                      [
                        [
                          [150, 180],
                          [
                            60,
                            [
                              [
                                [200, 60],
                                [
                                  80,
                                  [
                                    [
                                      [200, 0],
                                      [100, []],
                                    ],
                                    [
                                      [150, 60],
                                      [
                                        70,
                                        [
                                          [
                                            [100, 60],
                                            [
                                              50,
                                              [
                                                [
                                                  [150, 0],
                                                  [90, []],
                                                ],
                                                [
                                                  [100, 120],
                                                  [80, []],
                                                ],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [
                          [100, 300],
                          [70, []],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              [200, 120],
              [
                50,
                [
                  [
                    [150, 120],
                    [
                      80,
                      [
                        [
                          [150, 120],
                          [
                            50,
                            [
                              [
                                [200, 0],
                                [
                                  80,
                                  [
                                    [
                                      [100, 120],
                                      [
                                        50,
                                        [
                                          [
                                            [300, 60],
                                            [80, []],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                [300, 180],
                                [
                                  80,
                                  [
                                    [
                                      [150, 60],
                                      [
                                        60,
                                        [
                                          [
                                            [150, 60],
                                            [
                                              50,
                                              [
                                                [
                                                  [100, 300],
                                                  [
                                                    50,
                                                    [
                                                      [
                                                        [150, 0],
                                                        [80, []],
                                                      ],
                                                    ],
                                                  ],
                                                ],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [
                          [150, 240],
                          [
                            70,
                            [
                              [
                                [100, 120],
                                [50, []],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    [150, 240],
                    [
                      60,
                      [
                        [
                          [200, 180],
                          [
                            80,
                            [
                              [
                                [200, 120],
                                [100, []],
                              ],
                              [
                                [150, 240],
                                [
                                  50,
                                  [
                                    [
                                      [300, 180],
                                      [
                                        80,
                                        [
                                          [
                                            [300, 60],
                                            [80, []],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
      [
        [150, 120], //line2
        [
          60,
          [], //child2 from middle
        ],
      ],
      [
        [200, 180], //line3
        [
          100,
          [
            [
              [200, 240],
              [
                80,
                [
                  [
                    [200, 120],
                    [
                      60,
                      [
                        [
                          [100, 180],
                          [50, []],
                        ],
                      ],
                    ],
                  ],
                  [
                    [150, 300],
                    [
                      80,
                      [
                        [
                          [200, 0],
                          [
                            50,
                            [
                              [
                                [100, 60],
                                [50, []],
                              ],
                              [
                                [200, 300],
                                [
                                  80,
                                  [
                                    [
                                      [150, 180],
                                      [
                                        70,
                                        [
                                          [
                                            [150, 240],
                                            [90, []],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [
                          [200, 240],
                          [
                            80,
                            [
                              [
                                [300, 120],
                                [80, []],
                              ],
                              [
                                [150, 180],
                                [
                                  50,
                                  [
                                    [
                                      [100, 300],
                                      [
                                        60,
                                        [
                                          [
                                            [300, 300],
                                            [
                                              80,
                                              [
                                                [
                                                  [150, 0],
                                                  [70, []],
                                                ],
                                                [
                                                  [200, 240],
                                                  [
                                                    80,
                                                    [
                                                      [
                                                        [200, 120],
                                                        [80, []],
                                                      ],
                                                    ],
                                                  ],
                                                ],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ], //child3 from middle
        ],
      ],
      [
        [100, 300], //line4
        [
          70,
          [
            [
              [200, 0],
              [
                80,
                [
                  [
                    [200, 60],
                    [
                      50,
                      [
                        [
                          [200, 0],
                          [80, []],
                        ],
                      ],
                    ],
                  ],
                  [
                    [100, 120],
                    [50, []],
                  ],
                  [
                    [300, 300],
                    [
                      80,
                      [
                        [
                          [150, 60],
                          [70, []],
                        ],
                        [
                          [200, 180],
                          [
                            60,
                            [
                              [
                                [150, 300],
                                [
                                  50,
                                  [
                                    [
                                      [200, 300],
                                      [
                                        80,
                                        [
                                          [
                                            [150, 60],
                                            [90, []],
                                          ],
                                          [
                                            [150, 180],
                                            [
                                              60,
                                              [
                                                [
                                                  [200, 240],
                                                  [
                                                    80,
                                                    [
                                                      [
                                                        [150, 0],
                                                        [
                                                          70,
                                                          [
                                                            [
                                                              [150, 300],
                                                              [
                                                                90,
                                                                [
                                                                  [
                                                                    [150, 60],
                                                                    [80, []],
                                                                  ],
                                                                ],
                                                              ],
                                                            ],
                                                          ],
                                                        ],
                                                      ],
                                                      [
                                                        [150, 120],
                                                        [50, []],
                                                      ],
                                                      [
                                                        [150, 240],
                                                        [70, []],
                                                      ],
                                                    ],
                                                  ],
                                                ],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ], //child4 from middle
        ],
      ],
    ],
  ];
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  function createCircle(size, x, y, time, delay) {
    array.push(<Circle size={size} x={x} y={y} time={time} delay={delay} />);
  }
  function createLine(size, angle, x, y, time, delay) {
    array.push(
      <Line size={size} angle={angle} x={x} y={y} time={time} delay={delay} />
    );
  }

  function main(infoArray, x, y, timeSum) {
    let circleSize = infoArray[0];
    let timeCircle = Math.floor(Math.random() * 3) * 100 + 50;
    timeSum += timeCircle;
    createCircle(circleSize, x, y, timeCircle, timeSum);

    let linesAndChilds = infoArray[1];

    for (let lineAndChild of linesAndChilds) {
      let lineInfo = lineAndChild[0];
      let child = lineAndChild[1];

      let length = lineInfo[0];
      let angle = lineInfo[1];

      let timeLine = Math.floor(Math.random() * 3) * 100 + 50;
      createLine(length, angle, x, y, timeLine, timeSum + timeLine);

      let newX = x + length * Math.sin((angle * Math.PI) / 180);
      let newY = y - length * Math.cos((angle * Math.PI) / 180);

      main(child, newX, newY, timeSum + timeLine);
    }
  }

  main(info, cx, cy, 0);

  return (
    <>
      <div className="stage">
        {array.map((div) => {
          return div;
        })}
      </div>
    </>
  );
};
