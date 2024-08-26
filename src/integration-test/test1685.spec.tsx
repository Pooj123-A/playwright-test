
import { test, expect } from "@playwright/experimental-ct-react";
import App1685 from "../example/App1685.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1685 />);
  await expect(component).toContainText("Learn React");
});
