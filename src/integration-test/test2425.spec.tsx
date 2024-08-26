
import { test, expect } from "@playwright/experimental-ct-react";
import App2425 from "../example/App2425.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2425 />);
  await expect(component).toContainText("Learn React");
});
