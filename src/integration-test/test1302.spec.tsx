
import { test, expect } from "@playwright/experimental-ct-react";
import App1302 from "../example/App1302.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1302 />);
  await expect(component).toContainText("Learn React");
});
