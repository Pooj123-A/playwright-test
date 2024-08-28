
import { test, expect } from "@playwright/experimental-ct-react";
import App1944 from "./App1944.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1944 />);
  await expect(component).toContainText("Learn React");
});
