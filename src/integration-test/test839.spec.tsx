
import { test, expect } from "@playwright/experimental-ct-react";
import App839 from "../example/App839.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App839 />);
  await expect(component).toContainText("Learn React");
});
