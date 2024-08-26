
import { test, expect } from "@playwright/experimental-ct-react";
import App1965 from "./App1965.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1965 />);
  await expect(component).toContainText("Learn React");
});
