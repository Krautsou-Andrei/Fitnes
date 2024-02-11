import { LayoutConfig } from "@shared/config";
import { Button } from "antd";

export function Extra() {
    return (
        <div>
            <Button type='link'>{LayoutConfig.CARD_FOOTER_LINK}</Button>
            <p>{LayoutConfig.CARD_FOOTER_TITLE}</p>
        </div>
    );
}
