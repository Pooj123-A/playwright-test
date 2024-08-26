
import { test, expect } from "@playwright/experimental-ct-react";
import App1453 from "../example/App1453.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1453 />);
  await expect(component).toContainText("Learn React");
});
