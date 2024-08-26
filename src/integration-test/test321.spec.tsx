
import { test, expect } from "@playwright/experimental-ct-react";
import App321 from "../example/App321.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App321 />);
  await expect(component).toContainText("Learn React");
});
