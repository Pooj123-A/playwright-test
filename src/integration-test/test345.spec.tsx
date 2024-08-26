
import { test, expect } from "@playwright/experimental-ct-react";
import App345 from "../example/App345.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App345 />);
  await expect(component).toContainText("Learn React");
});
