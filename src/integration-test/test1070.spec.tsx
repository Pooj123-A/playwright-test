
import { test, expect } from "@playwright/experimental-ct-react";
import App1070 from "../example/App1070.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1070 />);
  await expect(component).toContainText("Learn React");
});
