
import { test, expect } from "@playwright/experimental-ct-react";
import App890 from "./App890.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App890 />);
  await expect(component).toContainText("Learn React");
});
