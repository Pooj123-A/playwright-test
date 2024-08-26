
import { test, expect } from "@playwright/experimental-ct-react";
import App1958 from "./App1958.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1958 />);
  await expect(component).toContainText("Learn React");
});
