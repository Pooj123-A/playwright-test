
import { test, expect } from "@playwright/experimental-ct-react";
import App826 from "../example/App826.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App826 />);
  await expect(component).toContainText("Learn React");
});
