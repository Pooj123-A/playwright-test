
import { test, expect } from "@playwright/experimental-ct-react";
import App1723 from "../example/App1723.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1723 />);
  await expect(component).toContainText("Learn React");
});
