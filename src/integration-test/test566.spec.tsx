
import { test, expect } from "@playwright/experimental-ct-react";
import App566 from "../example/App566.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App566 />);
  await expect(component).toContainText("Learn React");
});
