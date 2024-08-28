
import { test, expect } from "@playwright/experimental-ct-react";
import App1979 from "./App1979.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1979 />);
  await expect(component).toContainText("Learn React");
});
