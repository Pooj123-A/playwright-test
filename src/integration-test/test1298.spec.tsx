
import { test, expect } from "@playwright/experimental-ct-react";
import App1298 from "../example/App1298.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1298 />);
  await expect(component).toContainText("Learn React");
});
