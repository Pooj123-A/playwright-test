
import { test, expect } from "@playwright/experimental-ct-react";
import App1066 from "./App1066.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1066 />);
  await expect(component).toContainText("Learn React");
});
