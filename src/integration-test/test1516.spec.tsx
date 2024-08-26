
import { test, expect } from "@playwright/experimental-ct-react";
import App1516 from "../example/App1516.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1516 />);
  await expect(component).toContainText("Learn React");
});
