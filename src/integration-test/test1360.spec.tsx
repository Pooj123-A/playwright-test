
import { test, expect } from "@playwright/experimental-ct-react";
import App1360 from "../example/App1360.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1360 />);
  await expect(component).toContainText("Learn React");
});
