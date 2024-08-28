
import { test, expect } from "@playwright/experimental-ct-react";
import App181 from "./App181.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App181 />);
  await expect(component).toContainText("Learn React");
});
