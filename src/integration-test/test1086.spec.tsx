
import { test, expect } from "@playwright/experimental-ct-react";
import App1086 from "../example/App1086.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1086 />);
  await expect(component).toContainText("Learn React");
});
