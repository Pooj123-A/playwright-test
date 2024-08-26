
import { test, expect } from "@playwright/experimental-ct-react";
import App1457 from "../example/App1457.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1457 />);
  await expect(component).toContainText("Learn React");
});
