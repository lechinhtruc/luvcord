import { Fragment, useContext, useRef, useEffect, useState, memo } from "react";
import { AppContext } from "@/context/AppContext";
import ContextItem from "@/components/ContextMenu/ContextItem";

export default memo(function MyContextMenu() {
  const MenuRef = useRef();
  const { contextMenu } = useContext(AppContext);
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();
  const [focusItem, setFocusItem] = useState();

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const menuWidth = MenuRef.current.offsetWidth;
    const menuHeight = MenuRef.current.offsetHeight;

    let adjustedX = contextMenu.positionX;
    let adjustedY = contextMenu.positionY;

    if (contextMenu.positionX + menuWidth > windowWidth) {
      adjustedX = windowWidth - menuWidth;
    }

    if (contextMenu.positionY + menuHeight > windowHeight) {
      adjustedY = windowHeight - menuHeight;
    }

    setPosX(adjustedX);
    setPosY(adjustedY);
  }, [contextMenu.positionX, contextMenu.positionY]); //Calculate context menu position

  return (
    <div
      className={`bg-[#121212] rounded-md gap-1 text-white p-2 min-w-[170px] absolute z-50 animate-showContextMenu`}
      style={{
        top: posY + "px",
        left: posX + "px",
      }}
      ref={MenuRef}
      onContextMenu={(e) => e.preventDefault()}
      onMouseLeave={() => setFocusItem()}
    >
      {contextMenu.itemList.map((item, indexParent) => (
        <Fragment key={indexParent}>
          {item.group.map((item, index) => (
            <ContextItem
              onClick={() => item?.click(contextMenu.user.id)}
              title={item.title}
              icon={item.icon}
              key={`${indexParent}-${index}`}
              items={item.children}
              isFocus={`${indexParent}-${index}` === focusItem}
              onFocus={() => {
                setFocusItem(`${indexParent}-${index}`);
              }}
            />
          ))}
          {indexParent < contextMenu.itemList.length - 1 && (
            <div className="w-full h-[1px] bg-[#383838] my-1"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
});
