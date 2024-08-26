
import { test, expect } from "@playwright/experimental-ct-react";
import App1120 from "../example/App1120.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1120 />);
  await expect(component).toContainText("Learn React");
});
