
import { test, expect } from "@playwright/experimental-ct-react";
import App1731 from "../example/App1731.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1731 />);
  await expect(component).toContainText("Learn React");
});
