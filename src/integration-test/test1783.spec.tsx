
import { test, expect } from "@playwright/experimental-ct-react";
import App1783 from "../example/App1783.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1783 />);
  await expect(component).toContainText("Learn React");
});
