
import { test, expect } from "@playwright/experimental-ct-react";
import App1706 from "../example/App1706.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1706 />);
  await expect(component).toContainText("Learn React");
});
