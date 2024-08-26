
import { test, expect } from "@playwright/experimental-ct-react";
import App1154 from "../example/App1154.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1154 />);
  await expect(component).toContainText("Learn React");
});
