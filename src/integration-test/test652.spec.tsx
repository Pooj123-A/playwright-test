
import { test, expect } from "@playwright/experimental-ct-react";
import App652 from "../example/App652.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App652 />);
  await expect(component).toContainText("Learn React");
});
