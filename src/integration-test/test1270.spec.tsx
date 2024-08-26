
import { test, expect } from "@playwright/experimental-ct-react";
import App1270 from "../example/App1270.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1270 />);
  await expect(component).toContainText("Learn React");
});
