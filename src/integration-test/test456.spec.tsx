
import { test, expect } from "@playwright/experimental-ct-react";
import App456 from "../example/App456.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App456 />);
  await expect(component).toContainText("Learn React");
});
