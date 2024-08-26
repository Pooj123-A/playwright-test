
import { test, expect } from "@playwright/experimental-ct-react";
import App1180 from "../example/App1180.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1180 />);
  await expect(component).toContainText("Learn React");
});
