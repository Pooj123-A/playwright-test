
import { test, expect } from "@playwright/experimental-ct-react";
import App977 from "./App977.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App977 />);
  await expect(component).toContainText("Learn React");
});
