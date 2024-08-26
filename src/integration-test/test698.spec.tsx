
import { test, expect } from "@playwright/experimental-ct-react";
import App698 from "../example/App698.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App698 />);
  await expect(component).toContainText("Learn React");
});
