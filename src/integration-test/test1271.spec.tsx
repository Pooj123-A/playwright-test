
import { test, expect } from "@playwright/experimental-ct-react";
import App1271 from "../example/App1271.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1271 />);
  await expect(component).toContainText("Learn React");
});
