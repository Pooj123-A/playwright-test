
import { test, expect } from "@playwright/experimental-ct-react";
import App2321 from "../example/App2321.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2321 />);
  await expect(component).toContainText("Learn React");
});
