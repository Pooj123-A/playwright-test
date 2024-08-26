
import { test, expect } from "@playwright/experimental-ct-react";
import App1419 from "../example/App1419.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1419 />);
  await expect(component).toContainText("Learn React");
});
