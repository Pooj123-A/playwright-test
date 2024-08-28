
import { test, expect } from "@playwright/experimental-ct-react";
import App1043 from "./App1043.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1043 />);
  await expect(component).toContainText("Learn React");
});
