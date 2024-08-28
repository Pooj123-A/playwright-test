
import { test, expect } from "@playwright/experimental-ct-react";
import App1082 from "./App1082.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1082 />);
  await expect(component).toContainText("Learn React");
});
