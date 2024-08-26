
import { test, expect } from "@playwright/experimental-ct-react";
import App1157 from "../example/App1157.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1157 />);
  await expect(component).toContainText("Learn React");
});