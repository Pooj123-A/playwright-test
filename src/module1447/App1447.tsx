
import { test, expect } from "@playwright/experimental-ct-react";
import App1447 from "./App1447.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1447 />);
  await expect(component).toContainText("Learn React");
});
