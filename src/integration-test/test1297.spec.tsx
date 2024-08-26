
import { test, expect } from "@playwright/experimental-ct-react";
import App1297 from "../example/App1297.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1297 />);
  await expect(component).toContainText("Learn React");
});
