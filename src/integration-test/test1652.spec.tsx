
import { test, expect } from "@playwright/experimental-ct-react";
import App1652 from "../example/App1652.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1652 />);
  await expect(component).toContainText("Learn React");
});
