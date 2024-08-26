
import { test, expect } from "@playwright/experimental-ct-react";
import App983 from "../example/App983.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App983 />);
  await expect(component).toContainText("Learn React");
});
