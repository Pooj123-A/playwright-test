
import { test, expect } from "@playwright/experimental-ct-react";
import App1425 from "./App1425.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1425 />);
  await expect(component).toContainText("Learn React");
});
