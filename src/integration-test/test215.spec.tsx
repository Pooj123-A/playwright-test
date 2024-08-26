
import { test, expect } from "@playwright/experimental-ct-react";
import App215 from "../example/App215.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App215 />);
  await expect(component).toContainText("Learn React");
});
