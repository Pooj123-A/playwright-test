
import { test, expect } from "@playwright/experimental-ct-react";
import App1141 from "../example/App1141.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1141 />);
  await expect(component).toContainText("Learn React");
});
